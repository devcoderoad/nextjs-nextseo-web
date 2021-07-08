/** reactstrap */
import { Container, Row } from 'reactstrap';

/** components */
import LayoutDefault from '@layouts/Default';
import BlockMainTop from '@components/blocks/BlockMainTop';
import BlockMainBottom from '@components/blocks/BlockMainBottom';

/* cards */
import BoxTabs from '@components/cards/boxes/BoxTabs';

/** seo */
import { NextSeo } from 'next-seo';
/** env */
import ENV from '@config/env';
/** vars */
const {
  BASE_URL = '',
  BASE_API_URL = '',
  BASE_SEO = '',
  STATIC_DIR = '',
  AUTHOR,
} = ENV;

function Faqs(props) {
  const {
    pathname,
    data: {
      title,
      metaTitle,
      description,
      metaDescription,
      header,
      slug,
      block_top = {},
      boxHorizontalData = [],
      items = [],
    },
  } = props;

  const SEOS = {
    title,
    description: metaDescription.replace(/(<([^>]+)>)/gi, ''),
    canonical: `${BASE_URL}${pathname}`,
    openGraph: [
      {
        url: BASE_URL,
        images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
        site_name: AUTHOR,
      },
    ],
    ...BASE_SEO,
  };

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <BlockMainTop items={block_top} />
        <Container tag="section" id="learn">
          <Row className="mt-5">
            <div className="mx-auto">
              <h2 className="headline-center">Frequently Ask Questions</h2>
            </div>
          </Row>
        </Container>
        <Container tag="section" className="my-5 pb-5" id="about">
          <Container fluid>
            <BoxTabs props={items} />
          </Container>
        </Container>
        <BlockMainBottom />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const res = await fetch(`${BASE_API_URL}/api/faqs`);
  const json = await res.json();

  return { props: { data: json, pathname: resolvedUrl } };
}

export default Faqs;
