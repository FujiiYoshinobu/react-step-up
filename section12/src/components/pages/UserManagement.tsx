import {
    Center,
    Spinner,
    useDisclosure,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";

export const UserManagement: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, users, loading } = useAllUsers();
    const { onSelectUser, selectedUser } = useSelectUser();

    useEffect(() => getUsers(), []);

    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users, onOpen });
    }, []);

    return (
        <>
            {loading ? (
                <Center>
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }}>
                    {users.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard
                                imageUrl="https://picsum.photos/400"
                                userName={user.username}
                                fullName={user.name}
                                onClick={onClickUser}
                                id={user.id}
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            )}
            <UserDetailModal
                user={selectedUser}
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
});
