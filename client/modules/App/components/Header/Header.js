import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import './Header.sass';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <button key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? "selected" : ''}>{lang}</button>
  );

  return (
    <header className="app__top-header top-header">
      <nav className="top-header__navigation">
        <div className="top-header__links">
          <Link className="top-header__link" to="/kanban">Kanban</Link>
          <Link className="top-header__link" to="/">Blog</Link>
        </div>
        <div className="top-header__languages">
          <FormattedMessage id="switchLanguage" />
          {languageNodes}
        </div>
      </nav>
      {/*{*/}
        {/*context.router.isActive('/', true)*/}
          {/*? <div>*/}
              {/*<h1 className="top-header__site-title">*/}
                {/*<Link to="/" ><FormattedMessage id="siteTitle" /></Link>*/}
              {/*</h1>*/}
              {/*<a className="top-header__add-post-button" href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>*/}
            {/*</div>*/}
          {/*: null*/}
      {/*}*/}
    </header>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
