import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
]

const QuoteDetail = () => {
  const params = useParams()

  const quote = DUMMY.find(quote => quote.id === params.quoteID)

  if (!quote) {
    return <p>No quote found!</p>
  }

  return <>
    <HighlightedQuote text={quote.text} author={quote.author} />

    <Route path="/quotes/:quoteID/comments">
      <Comments />
    </Route>
  </>
}

export default QuoteDetail