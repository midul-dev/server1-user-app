'use client'
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"


const NewUserPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const users = Object.fromEntries(formData.entries()) as { name: string, email: string }

        console.log(users)
        const res = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users),
        }) 
        if (res.ok) {
            console.log('User created successfully')
        } else {
            console.error('Failed to create user')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <FieldGroup >
      <Field >
        <FieldLabel  htmlFor="fieldgroup-name">Name</FieldLabel>
        <Input name='name' id="fieldgroup-name" placeholder="Jordan Lee" />
      </Field>
      <Field>
        <FieldLabel  htmlFor="fieldgroup-email">Email</FieldLabel>
        <Input
          id="fieldgroup-email"
          name='email'
          type="email"
          placeholder="name@example.com"
        />
        <FieldDescription>
          We&apos;ll send updates to this address.
        </FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </Field>
    </FieldGroup>
    </form>
        </div>
    );
};

export default NewUserPage;