'use client'
import React from "react";

const withComponent1 = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
    // Wrap the functional component in a React component
    return (props: T & { children?: React.ReactNode }) => {
        return (
          <div>
            <h1>CHA</h1>
            <WrappedComponent {...props} />
          </div>
        );
      };
  };

  interface Component1Props {
    children?: React.ReactNode;
  }

  const Component1 = withComponent1<Component1Props>(({ children }) => {
    return (
      <div>
        {children}
      </div>
    );
  });
  export default Component1;
