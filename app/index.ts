// Define types and export data for clients

export interface Client {
  name: string;
  url: string;
  description: string;
  imageUrl: string;
}

// Export the client data to be used in multiple components
export const clients: Client[] = [
  {
    name: "Slingshot Aerospace",
    url: "https://slingshotaerospace.com",
    description:
      "Pioneering space sustainability and orbital safety with cutting-edge technologies",
    imageUrl: "/images/clients/slingshot.png"
  },
  {
    name: "Inversion Space",
    url: "https://inversionspace.com",
    description:
      "Developing rapid earth-to-space delivery with reentry capsule technology",
    imageUrl: "/images/clients/inversion.png"
  },
  {
    name: "Booz Allen",
    url: "https://www.boozallen.com",
    description:
      "Providing strategic consulting and technology solutions for government and commercial organizations",
    imageUrl: "/images/clients/boozallen.png"
  },
];
