import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '案例丰富探索',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        发现各类恋爱和相亲案例，探索多种情况和结果，借鉴他人经验，为你的恋爱之旅提供启示。
      </>
    ),
  },
  {
    title: '情感解析与洞察',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        通过推理和分析，深入了解案例中的情感和行为动机，揭示背后的心理状态，为你做出恋爱决策提供深度洞察。
      </>
    ),
  },
  {
    title: '个人化经验分享',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        浏览丰富的恋爱案例，从他人的经验中获得启发，然后以个人角度分享你的恋爱经历和相亲见解，让你的声音被倾听并为他人所受益。
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
