import { Route, Link, useRouteMatch } from 'react-router-dom';
import SinglePage from "./SinglePage"


const About = (props) => {
  const { url, path } = useRouteMatch()
  

  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${path}/:section`}>
        <SinglePage />
      </Route>
    </div>
  )
}
export default About