const AppContent = () => {
  return (
    <div>
      <FrequentlyAskedQuestions />
    </div>
  )
}
const App = () => {
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <AppContent />
      </ThemeProvider>
    </>
  )
}
export default App
