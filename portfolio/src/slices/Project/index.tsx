import Skill from "@/app/components/Skills";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Project`.
 */
export type ProjectProps = SliceComponentProps<Content.ProjectSlice>;

/**
 * Component for "Project" Slices.
 */
const Project = ({ slice }: ProjectProps): JSX.Element => {
  return (
                  <div className="grid lg:grid-rows-2 lg:grid-flow-col pt-8 lg:pt-16 gap-16">
                    {slice.items.map((item:any) => {
                      return(
                        <div className="row-span-2 border-sky-500 border-2 rounded-xl mb-32 lg:mb-8">
                          <PrismicNextImage className="px-8 pt-4" field={item.foto}/>
                          <h2 className="text-3xl text-slate-200 pt-4 px-8">{item.title}</h2>
                          <h4 className="text-base text-slate-200 pt-4 px-8">{item.information_1}</h4>
                          <h4 className="text-base text-slate-200 pt-2 px-8">{item.information_2}</h4>
                          <h3 className="text-2xl text-slate-200 pt-4 px-8">Used skills</h3>
                          <div className="flex flex-wrap px-8 py-4">
                              <Skill title={item.skill1} years={item.year1} />
                              <Skill title={item.skill2} years={item.year2} />
                              <Skill title={item.skill3} years={item.year3} />
                              <Skill title={item.skill4} years={item.year4} />
                          </div>
                      </div>
                      )
                    })}
                    
                </div>
  );
};

export default Project;
