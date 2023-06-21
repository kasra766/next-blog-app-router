"use client"
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface IProps {
  children: React.ReactNode;
}

export function Provider({ children }: IProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>{children}</Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
