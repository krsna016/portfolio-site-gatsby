import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"
// Assuming a generic Layout or SEO component structure

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: "Test Portfolio",
        description: "A test description",
        author: "@test",
      },
    },
  }))
})

describe("Gatsby StaticQuery Mocking", () => {
  it("mocks useStaticQuery successfully", () => {
    const data = useStaticQuery()
    expect(data.site.siteMetadata.title).toEqual("Test Portfolio")
  })
})
