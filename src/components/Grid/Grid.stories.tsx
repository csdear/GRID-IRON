import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Grid from "./Grid";

export default {
  title: "Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Basic: ComponentStory<typeof Grid> = (args) => (
  <div
    style={{
      background: "lightgreen",
      margin: "16px",
      position: "relative",
      height: "100vh",
    }}
  >
    {/* Change BOTH spacing props here for correct ruler spacing */}
    <GridRuler spacing="sm"></GridRuler>

    {/* GRID CONTAINER */}
    {/* OPTION justifyContent : Prop values  'flex-start' | 'center' | 'flex-end' | 'space-between'; */}
    {/* OPTION alignItems : Prop values  'flex-start' | 'center' | 'flex-end' |  */}
    {/* OPTION Spacing : Prop Options :  - sm, md or lg - ...wonder if we could create a prop for container size too? */}
    <Grid
      container
      spacing="sm"
      alignItems="center"
      style={{ height: "100%" }}
      {...args}
    >
      <Grid item xs={1} sm={6} md={4} lg={3}>
        <Box>Box 1</Box>
      </Grid>

      <Grid item xs={1} sm={6} md={4} lg={3}>
        <Box>Box 2</Box>
      </Grid>

      <Grid item xs={1} sm={6} md={4} lg={3}>
        <Box>Box 3</Box>
      </Grid>

      <Grid item xs={1} sm={6} md={4} lg={3}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>
);
