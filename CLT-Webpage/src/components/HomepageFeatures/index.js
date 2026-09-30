import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ask Questions',
    Svg: require('@site/static/img/CLT-1.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Read Ahead',
    Svg: require('@site/static/img/CLT-2.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Use GenAI for Learning',
    Svg: require('@site/static/img/CLT-3.svg').default,
    description: (
      <>
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
