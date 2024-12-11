import './App.css';
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder, useAuthActions, useTenantsState, AdminPortal} from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const { switchTenant } = useAuthActions();
  const { tenants } = useTenantsState();
  const [isShowModal, setShowModal] = useState(false);

  
  const tenantIdFromToken: string | null = user?.accessToken
    ? (jwtDecode(user.accessToken) as any).tenantId
    : null;


  useEffect(() => {
    console.log(user)
  },[])

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect()
    }},[isAuthenticated, loginWithRedirect])


  
  const logout = () => {
   const baseUrl = ContextHolder.getContext().baseUrl;
   window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };
  

  return (
        <div className="App">
            <div>
              <div style={{ width: "100%", background: "purple", color: "white" }}>
                <span>React App with hosted Login</span>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                {isShowModal ? (
                  <div
                    style={{
                      padding: "10px",
                      marginBottom: "5px",
                      border: "1px solid gray",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {tenants.map((tenant) => (
                      <span
                        onClick={() => switchTenant({ tenantId: tenant.tenantId })}
                        key={tenant.id}
                        style={
                          user?.tenantId == tenant.tenantId
                            ? { color: "purple" }
                            : { color: "gray" }
                        }
                      >
                        {tenant.tenantId}
                      </span>
                    ))}
                  </div>
                ) : null}
    
                <div>
                  <img
                    src={user?.profilePictureUrl || undefined}
                    alt={user?.name}
                  />
                </div>
                <div>
                  <span>Logged in as: {user?.name}</span>
                </div>
                <div>
                  <textarea name="user token" id="token">
                    {user?.accessToken}
                  </textarea>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setShowModal((prev) => !prev);
                    }}
                  >
                    Switch Tenants
                  </button>
                </div>
                <button
                  onClick={() => {
                    AdminPortal.show();
                  }}
                >
                  Admin Portal
                </button>
                <div>
                  <button onClick={() => logout()}>Click to logout</button>
                  
                </div>

              <h2>Current tenant from SDK: {user?.tenantId}</h2>
              <h2>Current tenant from token: {tenantIdFromToken}</h2>
              </div>
            </div>
       </div>
      );
    }

export default App;