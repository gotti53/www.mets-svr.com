import React from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'ページが見つかりません',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <BrowserView>
            <img align="right" src="https://media.tenor.com/ampW8g8v-vMAAAAd/hack-khaby.gif" style={{ maxWidth: "60%" }} />
          </BrowserView>
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  道に迷われましたかな？
                </Translate>
              </h1>
              <MobileView>
                <img src="https://media.tenor.com/ampW8g8v-vMAAAAd/hack-khaby.gif" style={{ padding: "1em" }} />
              </MobileView>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  ちょっとあなた！正しいURLを入力してもらえませんか？ただ正しいURLを入力する、簡単な事でしょう？
                </Translate>
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the 404 page">
                  あなたがどうしても正しいURLにたどりつけないなら下の内容を詳しい人に伝えるといいかもしれませんね。
                </Translate>
                <BrowserOnly>
                  {
                    () => <CodeBlock language='yml'>
                      url: {document.URL}<br />
                      referrer: {document.referrer != '' ? document.referrer : 'undefined'}
                    </CodeBlock>
                  }
                </BrowserOnly>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
