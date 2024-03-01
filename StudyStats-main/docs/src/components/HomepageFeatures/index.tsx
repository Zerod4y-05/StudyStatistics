import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Documentation",
        Svg: require("@site/static/img/document.svg").default,
        description: (
            <>
                Dieses Projekt wurde mit dem{" "}
                <a href="https://www.phinst.unibe.ch/ueber_uns/lehrlingsausbildung/website_polymechaniker/ausbildung/iperka/index_ger.html#:~:text=Die%20Projektmethode%20IPERKA%20geht%20davon,Projektablauf%2C%20verlangt%20eine%20strukturierte%20Vorgehensweise.">
                    IPERKA-Workflow
                </a>{" "}
                umgesetzt und entsprechend begleitend{" "}
                <a href="/StudyStats/docs/Documentation">dokumentiert</a>.
            </>
        )
    },
    {
        title: "Instructions",
        Svg: require("@site/static/img/lightbulb.svg").default,
        description: (
            <>
                Wie die Instructions zu gebrauchen ist wird in der{" "}
                <a href="/StudyStats/docs/Instructions">Instructions</a> ersichtlich.
            </>
        )
    }
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.featuresCenter}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
