import React from 'react';
import SkillSet from './SkillSet';

export default {
    title: 'SkillSet',
}

export const Default = ()=>{
    return (
        <SkillSet 
        header='My Skill Set'
        skills={[
            {
                title:<div style={{marginBottom:'5px'}}>Skill 1</div>,
                value:50
            },
            {
                title:<div style={{marginBottom:'5px'}}>Skill 2</div>,
                value:65
            },
            {
                title:<div style={{marginBottom:'5px'}}>Skill 3</div>,
                value:30
            },
            {
                title:<div style={{marginBottom:'5px'}}>Skill 4</div>,
                value:90
            }
        ]}
        />
    )
}