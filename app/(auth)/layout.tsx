const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <main className="h-full bg-[#f5f5f7] flex items-center justify-center">
        {children}
      </main>
    );
  }
   
  export default AuthLayout;