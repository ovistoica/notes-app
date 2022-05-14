import {Link} from '@remix-run/react'


export function ErrorBoundary({error}: {error: Error}) {
  return <p className={'text-red-700'}>
    Something went wrong. Please retry
    {'  '}{error.message}
  </p>
}


export default function NoteIndexPage() {
  return (
    <p>
      No note selected. Select a note on the left, or{' '}
      <Link to='new' className='text-blue-500 underline'>
        create a new note.
      </Link>
    </p>
  )
}
