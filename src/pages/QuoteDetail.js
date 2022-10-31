import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
  const params = useParams()

  console.log(params.quoteID)

  return <>
    <h1>Quote detail</h1>
    <p>{params.quoteID}</p>

    <Route path='/quotes/:quoteID/comments'>
      <Comments />
    </Route>
  </>
}

export default QuoteDetail