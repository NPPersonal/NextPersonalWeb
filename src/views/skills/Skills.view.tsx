import Box from "@mui/material/Box";
import useTheme from "@mui/styles/useTheme";
import Typography from "@mui/material/Typography";
import React from "react";
import Header from "../../components/concrete/OverlapHeader/OverlapHeader";
import SkillSet from "../../components/concrete/SkillSet/SkillSet";
import ZoomFadeCard from "../../components/concrete/ZoomFadeCard/ZoomFadeCard";
import RMasonry from "../../components/units/RMasonry/RMasonry";
import Section from "../../components/units/ScrollSection/ScrollSection";
import SkillLayout from "../../layout/SkillLayout";
import { SkillProps } from "../../props-def/PropDef";

type SkillViewProps = React.ComponentProps<typeof Section> & {
  group: SkillProps["group"];
  certificates: SkillProps["certificates"];
};

const SkillsView: React.FC<SkillViewProps> = (props: SkillProps) => {
  const { group, certificates, ...rest } = props;
  const theme = useTheme();
  return (
    <Section
      {...rest}
      bgcolor={theme.palette.secondary.main}
      color={theme.palette.secondary.contrastText}
    >
      <SkillLayout
        py={10}
        header={
          <Header
            mb={4}
            text="Summary"
            textColor={theme.palette.secondary.light}
            caption="I Have Learned"
            captionColor={theme.palette.secondary.contrastText}
            lineColor={theme.palette.info.main}
          />
        }
        skillGroup={group.map((g) => (
          <SkillSet
            mb={8}
            barColor={theme.palette.info.main}
            progressColor={theme.palette.secondary.dark}
            key={g.title}
            header={
              <Typography variant="h3" align="center">
                {g.title}
              </Typography>
            }
            skills={g.skills.map((s) => {
              return {
                title: <Typography variant="h5">{s.title}</Typography>,
                value: s.value,
              };
            })}
          />
        ))}
        certificates={
          <Box p={4}>
            <RMasonry>
              {certificates.map((cert) => {
                return (
                  <a
                    key={cert.title}
                    target="_blank"
                    href={cert.url}
                    rel="noopener noreferrer"
                  >
                    <div>
                      <ZoomFadeCard
                        thumbnailSrc={cert.url}
                        width="100%"
                        maskTitle={
                          <Typography variant="h4">{cert.title}</Typography>
                        }
                      />
                    </div>
                  </a>
                );
              })}
            </RMasonry>
          </Box>
        }
      />
    </Section>
  );
};

export default SkillsView;
