import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Container,
  Heading,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Link, 
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const EmailInput = ({ email, handleEmailChange }) => {
  const isError = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

  return (
    <FormControl mb={3} isInvalid={isError}>
      <FormLabel htmlFor="email">Your Email</FormLabel>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        fontSize={18}
      />
      {!isError ? (
        <FormHelperText color="green">
          You typed in your email correctly!
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}

const MessageInput = ({ message, handleMessageChange }) => {
  const isError = message.length < 2

  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor="message">Your message</FormLabel>
      <Textarea
        id="message"
        value={message}
        onChange={handleMessageChange}
        size="lg"
        height={200}
      />
      {!isError ? (
        <FormHelperText color="green">
          You wrote enough characters!
        </FormHelperText>
      ) : (
        <FormErrorMessage>Message is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}

const Contact = () => {
  const [email, setEmail] = useState('')
  const handleEmailChange = event => setEmail(event.target.value)

  const [message, setMessage] = useState('')
  const handleMessageChange = event => setMessage(event.target.value)

  const [status, setStatus] = useState('Submit')

  const [submitted, setSubmitted] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('Sending...')
    const data = {
      email,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log(`Response Received ${res.status}`)
      if (res.status === 200) {
        console.log('Response succeeded!')
        setStatus('Submit')
        setEmail('')
        setMessage('')
        setSubmitted('You have successfully submitted!')
      }
    })
  }

  return (
    <Layout>
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Heading as="h3" fontSize={36} variant="section-title">
            Contact
          </Heading>
          <Paragraph>
            Feel free to reach out if you have any questions or want to chat!
          </Paragraph>
          <Paragraph>If you prefer a different way of contacting me, reach out to my <Link rel="noopener" target="_blank" href="https://www.linkedin.com/in/dantranux/">LinkedIn
          </Link> with a note!</Paragraph>
          
          {submitted ? (
            <Alert
              status="success"
              mt={3}
              variant="subtle"
              flexDirection="column"
              py={50}
              mb={3}
            >
              <AlertIcon />
              <AlertTitle mr={2}>{submitted}</AlertTitle>
              <AlertDescription>
                You have sent an email to dantranux@gmail.com
              </AlertDescription>
            </Alert>
          ) : (
            <></>
          )}
          <form mb={3} onSubmit={handleSubmit}>
            <EmailInput
              email={email}
              setEmail={setEmail}
              handleEmailChange={handleEmailChange}
            />
            <MessageInput
              message={message}
              setMessage={setMessage}
              handleMessageChange={handleMessageChange}
            />
            <Button mt={3} isFullWidth colorScheme="teal" type="submit">
              {status}
            </Button>
          </form>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact
