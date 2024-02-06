import { CodeBox } from '@/components/CodeBox';
import { DefaultSection, Meta } from '@/layouts';
import { Main } from '@/templates';

const PostgresTsvector = () => {
  return (
    <Main
      meta={
        <Meta
          title="PostgreSQL, How to Search Using tsvector"
          description="Search Function Using tsvector in PostgreSQL"
        />
      }
    >
      <DefaultSection>
        <div className="text-left">
          <p className="mb-4">
            <a
              className="underline"
              href="https://www.postgresql.org/docs/current/datatype-textsearch"
            >
              PostgreSQL 공식 홈페이지
            </a>
            의 Chapter 8.11.Text Search Types 에서 tsvector 및 tsquery 설명 및
            예시를 찾아볼 수 있다. 해당 문서에서 제공하는 설명은 다음과 같다.
          </p>
          <p className="mb-4">
            PostgreSQL provides two data types that are designed to support full
            text search, which is the activity of searching through a collection
            of natural-language <i>documents</i> to locate those that best match
            a<i>query</i>. The <code>tsvector</code> type represents a document
            in a form optimized for text search; the <code>tsquery</code> type
            similarly represents a text query.
          </p>
          <p className="mb-4">
            PostgreSQL은 full text search를 지원하는 두 가지 데이터 타입을
            제공합니다. full text search는 <i>문서</i>의 자연어 컬렉션을
            검색하여 <i>쿼리</i>에 가장 근접한 것들을 찾아내는 것을 말합니다.
            <code>tsvector</code> 타입은 텍스트 검색에 최적화된 형태의 문서를
            나타냅니다. 비슷하게, <code>tsquery</code> 타입은 검색하기 위한
            텍스트 쿼리를 나타냅니다.
          </p>
          <CodeBox>
            {`SELECT 'a fat cat sat on a mat and ate a fat rat'::tsvector @@ 'cat & rat'::tsquery;`}
            <br />
            ?column?
            <br />
            ----------------------------
            <br />t
          </CodeBox>
          <p className="mb-4">
            위 코드의 Full Text Search 결과는 true/false 형태로 반환된다.
            해당하는 연산자가 @@ 이다.
          </p>
        </div>
      </DefaultSection>
    </Main>
  );
};

export default PostgresTsvector;
