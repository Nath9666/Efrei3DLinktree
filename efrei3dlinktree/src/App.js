function App() {
  return (
    <div className="App">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-green-600 mx-auto text-center text-5xl lg:text-3xl">
            Efrei3D : nos réseaux
          </h1>
          <Composant />
        </div>
      </div>
    </div>
  );
}

const links = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://fr.linkedin.com/company/efrei-3d",
    href: "https://fr.linkedin.com/company/efrei-3d",
    imageSrc:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/linkedin_logo_icon_170234.png",
    imageAlt: "Logo LinkedIn",
    description: "Une association étudiante mais pas que !",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/efrei3d/",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png",
    imageAlt: "Logo Instagram",
    description: "Pour rester informer de nos activités",
  },
  {
    id: 3,
    name: "Discord",
    url: "https://discord.gg/mk4bXtnVYx",
    imageSrc: "https://c.clc2l.com/t/d/i/discord-4OXyS2.png",
    imageAlt: "Logo Discord",
    description: "Envie de discuter avec nous ?",
  },
  {
    id: 4,
    name: "HelloAsso",
    url: "https://www.helloasso.com/associations/efrei-3d",
    imageSrc:
      "https://cdn.helloasso.com/img/logos/helloasso-44ac081445ee450f9906e9399ed0c7da.png?resize=fill:140:140",
    imageAlt: "Logo HelloAsso",
    description: "Envie de nous rejoindre ?",
  },
];

function Composant() {
  return (
    <div className="m-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-16">
      {links.map((link) => (
        <div key={link.id} className="group relative ">
          <div className="aspect-h-1 aspect-w-1 w-40 overflow-hidden rounded-full lg:aspect-none group-hover:opacity-75 lg:h-60 lg:w-60 group-focus:border-gray-950">
            <img
              src={link.imageSrc}
              alt={link.imageAlt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 border-8 flex justify-between rounded border-white hover:bg-green-100 hover:border-green-100">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={link.url}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {link.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{link.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
