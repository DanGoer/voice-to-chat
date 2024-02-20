function AuthWrapper({ children }) {
  return (
    <section className="d-flex justify-content-center align-items-center vh-100">
      {children}
    </section>
  );
}

export default AuthWrapper;
