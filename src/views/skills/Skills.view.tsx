import Box from "@material-ui/core/Box/Box";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import Link from "next/dist/client/link";
import React from "react";
import Header from "../../components/concrete/OverlapHeader/OverlapHeader";
import SkillSet from "../../components/concrete/SkillSet/SkillSet";
import ZoomFadeCard from "../../components/concrete/ZoomFadeCard/ZoomFadeCard";
import RMasonry from "../../components/units/RMasonry/RMasonry";
import Section from "../../components/units/ScrollSection/ScrollSection";
import SkillLayout from "../../layout/SkillLayout";
import { SkillProps } from "../../pageUtils/PropDef";

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
            barMaskColor={theme.palette.secondary.dark}
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
                  <Link key={cert.title} href={cert.url}>
                    <ZoomFadeCard
                      thumbnailSrc={cert.url}
                      width="100%"
                      maskTitle={
                        <Typography variant="h4">{cert.title}</Typography>
                      }
                    />
                  </Link>
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
