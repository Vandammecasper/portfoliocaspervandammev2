import { createClient } from '../../prismicio'
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { PrismicNextImage } from '@prismicio/next';

export default async function Page() {
    const client = createClient();

    const projectAsync = client.getSingle('projects', {fetchLinks: [
        'project.title',
        'project.foto',
        'project.information1',
        'project.information2',
        'Skill.title',
    ]})
    const projectasy = client.getByType('project')

    const project = await projectasy
    
    const projects = await projectAsync
    console.log(projects.data.projecten[0]?.project.data)
    return(
        <main className="overflow-hidden px-8 lg:px-16 pb-24 lg:pb-16">
                <h1 className="lg:text-5xl text-3xl font-medium text-sky-500 pt-6 lg:pt-16">projects()</h1>
                <div className="grid lg:grid-rows-2 lg:grid-flow-col pt-8 lg:pt-16 gap-16">
                    {project.results.map((item:any, index) => {
                      return(
                        <div className="row-span-2 border-sky-500 border-2 rounded-xl mb-32 lg:mb-8" key={'sliceitem: '+ index}>
                          <PrismicNextImage className="px-8 pt-4" field={item.foto}/>
                          <h2 className="text-3xl text-slate-200 pt-4 px-8">{item.title}</h2>
                          <h4 className="text-base text-slate-200 pt-4 px-8">{item.information_1}</h4>
                          <h4 className="text-base text-slate-200 pt-2 px-8">{item.information_2}</h4>
                          <h3 className="text-2xl text-slate-200 pt-4 px-8">Used skills</h3>
                          <div className="flex flex-wrap px-8 py-4">
                              {/* <Skills title={item.skill1} years={item.year1} />
                              <Skills title={item.skill2} years={item.year2} />
                              <Skills title={item.skill3} years={item.year3} />
                              <Skills title={item.skill4} years={item.year4} /> */}
                          </div>
                      </div>
                      )
                    })}
                    
                </div>
        </main>
    )
}