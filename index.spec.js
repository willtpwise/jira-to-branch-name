const { jiraToBranchName } = require('./index')

test.each`
  input                          | output
  ${'FOO 1234 Make this faster'} | ${'FOO-1234-make-this-faster'}
  ${'FOO-1234 Make this faster'} | ${'FOO-1234-make-this-faster'}
  ${'FOO 1234 Make this faster, again!'} | ${'FOO-1234-make-this-faster-again'}
  ${'FOO 1234 \nMake this faster, again!'} | ${'FOO-1234-make-this-faster-again'}
  ${'FOO 1234 Forked from FOO 1233'} | ${'FOO-1234-forked-from-foo-1233'}
  ${'FOO 1234  '} | ${'FOO-1234'}
  ${'Make this faster'} | ${'make-this-faster'}
`('should convert $input to $output', ({ input, output }) => {
  expect(jiraToBranchName(input)).toBe(output)
})