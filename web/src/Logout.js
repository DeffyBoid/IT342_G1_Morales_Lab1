function Logout() {
  return (
    <div className="Logoutpage">
      <h2>This is the Logout!</h2>
      <div className='logoutbox'>
        <form>
            <p>Are you sure you want to logout?</p>
          <button type="submit">Logout</button>
        </form>
      </div>
    </div>
  );
}

export default Logout;