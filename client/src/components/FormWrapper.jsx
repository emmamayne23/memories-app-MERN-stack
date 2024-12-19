import { useAuthStore } from "../store/auth"
import Form from "./Form"

const FormWrapper = () => {
    const { user } = useAuthStore()
  return (
    <>
    <div className="p-6">
    {user ? (
      <Form />  // Show form if logged in
    ) : (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Sign In Required</h2>
        <p className="mt-2 text-gray-600">
          You need to be signed in to create a memory and like other memories.
        </p>
      </div>
    )}
  </div>
    </>
  )
}

export default FormWrapper