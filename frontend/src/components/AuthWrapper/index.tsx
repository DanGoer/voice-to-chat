//wrapper component, applies style to all pages who need auth
function AuthWrapper({ children }) {
  return (
    <section className="d-flex justify-content-center align-items-center vh-100">
      {children}
    </section>
  );
}

export default AuthWrapper;
