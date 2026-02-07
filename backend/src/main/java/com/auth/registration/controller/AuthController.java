package com.auth.registration.controller;

import com.auth.registration.dto.AuthRequests;
import com.auth.registration.entity.User;
import com.auth.registration.repository.UserRepository;
import com.auth.registration.security.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequests.RegisterRequest req) {
        if (userRepository.existsByUsername(req.username)) {
            return ResponseEntity.badRequest().body(Map.of("error", "username_taken"));
        }
        if (userRepository.existsByEmail(req.email)) {
            return ResponseEntity.badRequest().body(Map.of("error", "email_taken"));
        }
        User user = new User(req.username, req.email, passwordEncoder.encode(req.password));
        userRepository.save(user);
        return ResponseEntity.ok(Map.of("status", "registered"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequests.LoginRequest req) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(req.username, req.password));
        String token = jwtUtil.generateToken(req.username);
        Map<String, String> body = new HashMap<>();
        body.put("token", token);
        return ResponseEntity.ok(body);
    }

}
