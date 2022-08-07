import { useHistory } from "react-router-dom";

function NotFound (props) {

  const history = useHistory();

  return (
    <section className="not-found">
      <h2 className="not-found__header">404</h2>
      <p className="not-found__paragraph">Страница не найдена</p>
      <button className="not-found__back" onClick={history.goBack}>Назад</button>
    </section>
  );
}

export default NotFound;