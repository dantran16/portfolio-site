import React, { useState } from 'react';
import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Textarea, Container, Heading, Button } from '@chakra-ui/react';
import Layout from '../components/layouts/article'
import Section from '../components/section';

const EmailInput = ({email, handleEmailChange}) => {
  const isError = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor='email'>Your Email</FormLabel>
      <Input
        id='email'
        type='email'
        value={email}
        onChange={handleEmailChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter your email!
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}


const MessageInput = ({message, handleMessageChange}) => {


  const isError = message.length < 2

  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor='message'>Your message</FormLabel>
      <Textarea
        id='message'
        value={message}
        onChange={handleMessageChange}
        size='lg'
        height={200}
      />
      {!isError ? (
        <FormHelperText>
          Enter the message you want to send me!
        </FormHelperText>
      ) : (
        <FormErrorMessage>Message is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}


const Contact = () => {
  const [email, setEmail] = useState('')
  const handleEmailChange = (event) => setEmail(event.target.value)

  const [message, setMessage] = useState('')
  const handleMessageChange = (event) => setMessage(event.target.value)

  const [status, setStatus] = useState("Submit")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")
    const data = {
      email,
      message
    }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log(`Response Received ${res.status}`)
      if (res.status === 200) {
        console.log('Response succeeded!')
        setStatus("Submit")
        setEmail('')
        setMessage('')
      }
    });
  }

  return (
    <Layout>
      <Container maxW='container.md'>
        <Heading as="h3" fontSize={36} mb={4}>
          Contact
        </Heading>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Contact Form
          </Heading>
          <form onSubmit={handleSubmit}>
            <EmailInput email={email} setEmail={setEmail} handleEmailChange={handleEmailChange} />
            <MessageInput message={message} setMessage={setMessage} handleMessageChange={handleMessageChange} />
            <Button isFullWidth colorScheme='teal' type="submit">{status}</Button>
          </form>
        </Section>
      </Container>
    </Layout>
    
    
  )
}

export default Contact;