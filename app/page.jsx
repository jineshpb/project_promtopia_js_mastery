import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">AI powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promtopia is an AI powered platform that helps you discover the best promos in town.
            to discover , create and share creative prompts.
        </p>
        <Feed />
    </section>
  )
}

export default Home
