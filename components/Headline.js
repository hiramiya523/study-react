import React from 'react';
import styles from '../styles/Home.module.css'

export default function Headline(props) {
  // console.log(props);
  return (
      // <React.Fragment>
      <div>
        <h1 className={styles.title}>{props.title}</h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/{props.page}.js</code>
        </p>
      </div>
      // </React.Fragment>
  );
}
