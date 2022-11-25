import { Link, Route, useParams, Routes } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import { useEffect } from 'react'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
  const params = useParams()
  const { quoteID } = params

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteID)
  }, [sendRequest, quoteID])

  if (status === 'pending') {
    return <div className="centered"><LoadingSpinner /></div>
  }

  if (error) {
    return <p className="centered focused">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>
  }

  return <>
    <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

    <Routes>
      <Route
        path=''
        element={
          <div className="centered">
            <Link className="btn--flat" to='comments'>Load Comments</Link>
          </div>
        }
      />

      <Route path='comments' element={<Comments />} />
    </Routes>
  </>
}

export default QuoteDetail