import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
]

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams()

  console.log(match)

  const quote = DUMMY.find(quote => quote.id === params.quoteID)

  if (!quote) {
    return <p>No quote found!</p>
  }

  return <>
    <HighlightedQuote text={quote.text} author={quote.author} />

    <Route path={match.path} exact>
      <div className="centered">
        <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
      </div>
    </Route>

    <Route path={`${match.path}/comments`}>
      <Comments />
    </Route>
  </>
}

export default QuoteDetail