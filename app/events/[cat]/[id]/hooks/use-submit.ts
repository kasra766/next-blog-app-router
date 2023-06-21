import { isAxiosError } from "axios";
import { useReducer, useRef } from "react";
import { useMutation } from "react-query";
import { useParams } from "next/navigation";
import { registerEmail } from "@/services/file-api";


const initialData={
    message:"",
    color:""
  }
  
  function reducer(current:typeof initialData,update:Partial<typeof initialData>){
    return {
      ...current,
      ...update
    }
  }

  
export function useSubmit() {
  const [messageDetail, setMessage] = useReducer(reducer,initialData);
  const inputEmail = useRef<HTMLInputElement>(null);
  const {id} = useParams()

  const { mutate } = useMutation(registerEmail, {
    onError(error, variables, context) {
      if (isAxiosError(error)) {
        setMessage({message:error.response?.data.message,color:"red"});
      }
    },
    onSuccess(data, variables, context) {
      setMessage({message:data.data.message,color:"green"});
    },
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = inputEmail.current?.value;
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email?.match(validRegex)) {
      setMessage({
        message: "Please introduce a correct email address",
        color: "red",
      });
      return;
    }

    try {
      if (email) {
        mutate({ email, eventId: id as string });
        inputEmail.current.value = "";
      }
    } catch (e) {
      console.error(e);
    }
  }

  return {onSubmit,inputEmail,messageDetail}
}
