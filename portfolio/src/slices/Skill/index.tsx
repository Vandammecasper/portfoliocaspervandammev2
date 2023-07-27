'use client'
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Skills from "@/app/components/Skill";

/**
 * Props for `Skill`.
 */
export type SkillProps = SliceComponentProps<Content.SkillSlice>;

/**
 * Component for "Skill" Slices.
 */
const Skill = ({ slice }: SkillProps): JSX.Element => {
  
  return (
    <div className="flex flex-wrap ml-8 mt-4 w-4/5">
      {slice.items.map((slice:any) =>{
        return(
          <Skills title={slice.title} years={slice.years} />
        )
      })}
    </div>
  );
};

export default Skill;
