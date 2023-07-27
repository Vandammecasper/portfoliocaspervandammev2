import { createClient } from '../../prismicio'
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page() {
    const client = createClient();

    const projectAsync = client.getSingle('projects')

    const projects = await projectAsync
    return(
        <main className="overflow-hidden px-8 lg:px-16 pb-24 lg:pb-16">
                <h1 className="lg:text-5xl text-3xl font-medium text-sky-500 pt-6 lg:pt-16">projects()</h1>
                <SliceZone slices={projects.data.slices} components={components} />
        </main>
    )
}