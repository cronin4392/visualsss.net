import React from "react";

export type PageType = {
  content: Array<SectionType>;
};

export type SectionType = {
  type: "section";
  title: string;
  content: SectionContentType;
};

export type SectionContentType = SectionType | ContentType;

export type ContentType = {
  type: "content";
  content: React.ReactNode;
};

export const isSection = (
  content: SectionContentType
): content is SectionType => content.type === "section";

export const isContent = (
  content: SectionContentType
): content is ContentType => content.type === "content";
