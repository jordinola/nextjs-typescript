interface Props {
    params: {
        id: string
    }
}
const UserDetail = async ({ params }: Props ) => {

    const { id } = await params;

  return (
    <h1 className='text-3xl'>
        User Detail: { id }
    </h1>
  )
}

export default UserDetail