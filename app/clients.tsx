import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { clients, Client } from "./index";

export default function Example() {
  // The clients array is now imported from index.ts
  
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-semibold leading-7 text-rose-800">Clients</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trusted by companies in space & defense
        </p>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {clients.map((client) => (
              <div key={client.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg">
                    {client.imageUrl && (
                      <Image 
                        src={client.imageUrl} 
                        alt={`${client.name} logo`} 
                        width={40} 
                        height={40} 
                        className="object-contain"
                      />
                    )}
                  </div>
                  {client.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{client.description}</p>
                  <p className="mt-6">
                    <Link
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold leading-6 text-rose-800"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
