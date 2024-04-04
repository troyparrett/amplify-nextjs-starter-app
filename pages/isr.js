export function getStaticProps() {
  return {
      props: {
          time: new Date().toISOString(),
      },
      revalidate: 50,
  };
}

export default function ISR({ time }) {
  return <h1>{time}</h1>
}
