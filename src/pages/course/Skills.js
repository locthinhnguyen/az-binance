import React from 'react';
import { listSkill } from '../../contents/home';
import { Tag, Space } from 'antd';

const Skills = () => {
  return (
    <div className="p-5 flex flex-col gap-3 ">
      <h4 className=" text-h4-medium">Các kỹ năng liên quan</h4>
      <div className="flex flex-rows">
        {listSkill.map((item) => {
          return (
            <Space size={[0, 10]} wrap>
              <Tag
                color="#FAFAFA"
                className=" !text-description !text-character-primary-85"
              >
                {item}
              </Tag>
            </Space>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
