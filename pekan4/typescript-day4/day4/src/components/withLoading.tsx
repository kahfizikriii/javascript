import React from "react";

interface WithLoadingProps {
  loading: boolean;
}

export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLoadingProps> => {
  return ({ loading, ...props }: WithLoadingProps & P) => {
    if (loading) {
      return (
        <div className="p-4 border rounded-lg shadow-md m-4 text-center">
          <p>⏳ Loading...</p>
        </div>
      );
    }
    return <WrappedComponent {...(props as P)} />;
  };
};
