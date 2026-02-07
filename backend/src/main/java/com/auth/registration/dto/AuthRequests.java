package com.auth.registration.dto;

public class AuthRequests {

    public static class RegisterRequest {
        public String username;
        public String email;
        public String password;
    }

    public static class LoginRequest {
        public String username;
        public String password;
    }

}
