import { useGetTeacherQuery } from "../../features/teacherApiSlice";

function TeacherList () {

    const { data, isError, isLoading, error } = useGetTeacherQuery();

    if(isLoading) return (<div>Loading...</div>);
    else if(isError) return (<div>Error: {error.message}</div>)

    console.log(data);

    return(
        <div>TeacherList</div>
    )
}

export default TeacherList;