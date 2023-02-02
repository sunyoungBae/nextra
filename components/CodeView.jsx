import { Tab, Tabs } from 'nextra-theme-docs';
import { useMDXComponents } from 'nextra/mdx';

// TODO : code로 string으로 변환해서 보여주는 방법이 있는지 확인해보기
export const CodeView = ({ code, codeString }) => {
  const MDXComponents = useMDXComponents();
  return (
    <Tabs items={['결과', '코드']}>
      <Tab>
        {code}
      </Tab>
      <Tab>
        <MDXComponents.pre>{codeString}</MDXComponents.pre>
      </Tab>
    </Tabs>
  );
}