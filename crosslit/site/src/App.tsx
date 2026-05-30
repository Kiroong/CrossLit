function App() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md mx-auto px-5 py-12">
          <p className="text-lg font-semibold text-gray-500 mb-4">CHI 2026 Paper</p>

          <h1 className="mb-2 flex items-center gap-3">
            <img src="/CrossLit/icon.png" alt="CrossLit Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
            <span className="text-5xl sm:text-6xl font-bold text-blue-600">CrossLit</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 leading-tight">
            Connecting Visual and Textual Sensemaking for Literature Review
          </h2>

          {/* Teaser Image */}
          <div>
            <img
              src="/CrossLit/teaser.png"
              alt="CrossLit System Interface"
              className="w-full max-w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="pt-8 pb-12">
        <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md mx-auto px-5">
          <h2 className="text-xl font-bold tracking-tight text-blue-600 uppercase mb-6">Abstract</h2>
          <p className="text-gray-700 leading-relaxed">
            Conducting literature reviews is cognitively demanding, requiring researchers to navigate large volumes of work while constructing coherent narratives that position their contributions.
            The process unfolds through iterative stages of sensemaking, each demanding different support.
            Existing tools emphasize either visual interfaces that provide macroscopic overviews or textual interfaces that support thematic organization and narrative construction.
            However, keeping modalities separate forces researchers to switch between tools, disrupting workflow continuity.
            We present <strong className="text-blue-600">CrossLit</strong>, a system that integrates and synchronizes visual and textual interfaces to support the entire process from discovering papers to composing coherent narratives.
            CrossLit allows researchers to group and annotate papers visually while generating aligned textual structures, and to edit text that automatically updates visual representations.
            We find that CrossLit helps users develop and refine conceptual structures and build narratives iteratively through seamless cross-modal transitions.
            We conclude by discussing design implications for synchronizing visual and textual interfaces for sensemaking support.
          </p>

          <div className="flex flex-wrap gap-2 text-sm mt-6">
            <a href="/CrossLit/paper.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors w-fit">
              Paper
            </a>
            <a href="https://dl.acm.org/doi/10.1145/3772318.3791418" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors w-fit">
              ACM DL
            </a>
          </div>
        </div>
      </section>

      {/* System Overview Section */}
      <section className="pt-8 pb-12 border-t">
        <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md mx-auto px-5">
          <h2 className="text-xl font-bold tracking-tight text-blue-600 uppercase mb-6">System Overview</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            CrossLit provides two synchronized editors: a <strong>visual editor</strong> that represents papers as spatially organized nodes and groups,
            and a <strong>text editor</strong> that presents the same structure as hierarchical sections and paragraphs.
            Edits in one interface are immediately reflected in the other, enabling fluid transitions between exploration and synthesis.
          </p>

          <div className="mb-8">
            <a
              href="https://youtu.be/2vQkI2M8hD0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              See full demo video
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {/* cgif-two */}
            <div className="space-y-3">
              <img
                src="/CrossLit/cgif-two-optimized.gif"
                alt="Writing Notes & Grouping Papers"
                className="w-full max-w-full rounded-lg border border-gray-200"
              />
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">(VIS → TEXT)</p>
                <p className="font-semibold text-gray-900">Writing Notes & Grouping Papers</p>
              </div>
            </div>

            {/* cgif-three */}
            <div className="space-y-3">
              <img
                src="/CrossLit/cgif-three-optimized.gif"
                alt="Editing Texts"
                className="w-full max-w-full rounded-lg border border-gray-200"
              />
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">(TEXT → VIS)</p>
                <p className="font-semibold text-gray-900">Editing Texts</p>
              </div>
            </div>

            {/* cgif-four */}
            <div className="space-y-3">
              <img
                src="/CrossLit/cgif-four-optimized.gif"
                alt="Analyzing Bibliographic Data"
                className="w-full max-w-full rounded-lg border border-gray-200"
              />
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">(VIS)</p>
                <p className="font-semibold text-gray-900">Analyzing Bibliographic Data</p>
              </div>
            </div>

            {/* cgif-five */}
            <div className="space-y-3">
              <img
                src="/CrossLit/cgif-five-optimized.gif"
                alt="Searching New Papers"
                className="w-full max-w-full rounded-lg border border-gray-200"
              />
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">(VIS + TEXT)</p>
                <p className="font-semibold text-gray-900">Searching New Papers by Complementary Motivations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Process Section */}
      <section className="pt-8 pb-12 border-t">
        <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md mx-auto px-5">
          <h2 className="text-xl font-bold tracking-tight text-blue-600 uppercase mb-6">Research Process</h2>
          {/* Vertical layout for small screens */}
          <div className="flex flex-col gap-6 mb-6 sm:hidden">
            <div>
              <img
                src="/CrossLit/crosslit-analysis.gif"
                alt="CrossLit Analysis Process"
                className="w-full max-w-full rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div>
              <img
                src="/CrossLit/sequential-patterns.png"
                alt="Sequential Patterns"
                className="w-full max-w-full rounded-lg"
              />
            </div>
          </div>

          {/* Horizontal layout for large screens */}
          <div className="hidden sm:flex items-center gap-6 mb-6">
            <div className="flex-1">
              <img
                src="/CrossLit/crosslit-analysis.gif"
                alt="CrossLit Analysis Process"
                className="w-full max-w-full rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="flex-1">
              <img
                src="/CrossLit/sequential-patterns.png"
                alt="Sequential Patterns"
                className="w-full max-w-full rounded-lg"
              />
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We observed how and why 16 researchers used visual and textual modalities through <strong>think-aloud protocols</strong>, and discovered significant patterns through <strong>sequential analysis</strong>.
          </p>
        </div>
      </section>

      {/* Design Space Section */}
      <section className="pt-8 pb-12 border-t">
        <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md mx-auto px-5">
          <h2 className="text-xl font-bold tracking-tight text-blue-600 uppercase mb-6">Design Space</h2>
          <div className="mb-6">
            <img
              src="/CrossLit/design-space.png"
              alt="Design Space for Literature Review Tools"
              className="w-full max-w-full rounded-lg"
            />
          </div>
          <p className="text-gray-700 leading-relaxed">
            Through the observed patterns, we identified the role of visual and textual modalities across literature review stages and the key future challenges to connect them.
          </p>
        </div>
      </section>

      {/* Authors Section */}
      <section className="pt-8 pb-12 border-t">
        <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md mx-auto px-5">
          <h2 className="text-xl font-bold tracking-tight text-blue-600 uppercase mb-6">Authors</h2>

          <div className="flex flex-wrap gap-6">
            {/* Kiroong Choe */}
            <a href="https://kiroong.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <img
                src="/CrossLit/kiroong-choe.jpeg"
                alt="Kiroong Choe"
                className="w-30 h-30 rounded-full object-cover flex-shrink-0 group-hover:ring-4 group-hover:ring-blue-200 transition-all"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="text-center">
                <div className="font-semibold text-gray-900 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  Kiroong Choe
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600">Seoul National University</div>
              </div>
            </a>

            {/* Eunhye Kim */}
            <a href="https://gracekim027.github.io/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <img
                src="/CrossLit/eunhye-kim.jpg"
                alt="Eunhye Kim"
                className="w-30 h-30 rounded-full object-cover flex-shrink-0 group-hover:ring-4 group-hover:ring-blue-200 transition-all"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="text-center">
                <div className="font-semibold text-gray-900 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  Eunhye Kim
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600">KAIST</div>
              </div>
            </a>

            {/* Min Hyeong Kim */}
            <a href="https://hcil.snu.ac.kr/people/min-hyeong-kim" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <img
                src="/CrossLit/min-hyeong-kim.webp"
                alt="Min Hyeong Kim"
                className="w-30 h-30 rounded-full object-cover flex-shrink-0 group-hover:ring-4 group-hover:ring-blue-200 transition-all"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="text-center">
                <div className="font-semibold text-gray-900 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  Min Hyeong Kim
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600">Seoul National University</div>
              </div>
            </a>

            {/* Suyeon Hwang */}
            <a href="https://hcil.snu.ac.kr/people/suyeon-hwang" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <img
                src="/CrossLit/suyeon-hwang.webp"
                alt="Suyeon Hwang"
                className="w-30 h-30 rounded-full object-cover flex-shrink-0 group-hover:ring-4 group-hover:ring-blue-200 transition-all"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="text-center">
                <div className="font-semibold text-gray-900 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  Suyeon Hwang
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600">Seoul National University</div>
              </div>
            </a>

            {/* Sangwon Park */}
            <a href="https://www.sangwonme.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <img
                src="/CrossLit/sangwon-park.jpeg"
                alt="Sangwon Park"
                className="w-30 h-30 rounded-full object-cover flex-shrink-0 group-hover:ring-4 group-hover:ring-blue-200 transition-all"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="text-center">
                <div className="font-semibold text-gray-900 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  Sangwon Park
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600">Seoul National University</div>
              </div>
            </a>

            {/* Nam Wook Kim */}
            <a href="https://www.namwkim.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <img
                src="/CrossLit/nam-wook-kim.png"
                alt="Nam Wook Kim"
                className="w-30 h-30 rounded-full object-cover flex-shrink-0 group-hover:ring-4 group-hover:ring-blue-200 transition-all"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="text-center">
                <div className="font-semibold text-gray-900 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  Nam Wook Kim
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600">Boston College</div>
              </div>
            </a>

            {/* Jinwook Seo */}
            <a href="https://hcil.snu.ac.kr/people/jinwook-seo" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <img
                src="/CrossLit/jinwook-seo.webp"
                alt="Jinwook Seo"
                className="w-30 h-30 rounded-full object-cover flex-shrink-0 group-hover:ring-4 group-hover:ring-blue-200 transition-all"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="text-center">
                <div className="font-semibold text-gray-900 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  Jinwook Seo
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600">Seoul National University</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="pt-8 pb-12 border-t">
        <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md mx-auto px-5">
          <h2 className="text-xl font-bold tracking-tight text-blue-600 uppercase mb-6">Citing This Work</h2>

          <div className="mb-8">
            <p className="text-gray-700 mb-1">
              Kiroong Choe, Eunhye Kim, Min Hyeong Kim, Suyeon Hwang, Sangwon Park, Nam Wook Kim, and Jinwook Seo. 2026.
            </p>
            <p className="font-semibold text-gray-900 mb-1">
              CrossLit: Connecting Visual and Textual Sensemaking for Literature Review.
            </p>
            <p className="text-gray-700 mb-1">
              In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26).
            </p>
            <p className="text-gray-700">
              https://doi.org/10.1145/3772318.3791418
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">BibTeX</h3>
            <pre className="bg-gray-50 text-gray-800 p-4 rounded-lg overflow-x-auto text-sm border border-gray-200">
{`@inproceedings{choe2026crosslit,
  title={CrossLit: Connecting Visual and Textual Sensemaking for Literature Review},
  author={Choe, Kiroong and Kim, Eunhye and Kim, Min Hyeong and Hwang, Suyeon and Park, Sangwon and Kim, Nam Wook and Seo, Jinwook},
  year={2026},
  publisher={Association for Computing Machinery},
  address={New York, NY, USA},
  url={https://doi.org/10.1145/3772318.3791418},
  doi={10.1145/3772318.3791418},
  booktitle={Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems},
  location={Barcelona, Spain},
  series={CHI '26}
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t text-center text-sm text-gray-400">
      </footer>

    </div>
  )
}

export default App
