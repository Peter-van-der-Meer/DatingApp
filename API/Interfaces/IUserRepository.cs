using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces {
    public interface IUserRepository {
        void Update(AppUser user);
        Task<bool> SaveAllASync();
        Task<IEnumerable<AppUser>> GetUsersASync();
        Task<AppUser> GetUserByIdAsync(int id);
        Task<AppUser> GetUserByUsernameAsync(string username);
        Task<IEnumerable<MemberDto>> GetMembersASync();
        Task<MemberDto> GetMemberAsync(string username);
    }
}
