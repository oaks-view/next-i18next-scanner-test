// pages/about.js
const About = () => {
  return (
      <p>This is the about page</p>
  );
}

About.getInitialProps = async ctx => {
  return {
    namespacesRequired: ['common']
  };
};

export default About;

